import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const size = { width: 1200, height: 630 };
const defaultTitle = 'Alexis Lyon';
const defaultSubtitle = 'Transformational Guide & Somatic Healer';

async function getCormorantFont() {
  try {
    const css = await fetch('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap').then((res) => res.text());
    const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    if (!fontUrl) return null;
    return fetch(fontUrl).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || defaultTitle;
  const subtitle = searchParams.get('sub') || defaultSubtitle;
  const fontData = await getCormorantFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #12362B 0%, #1B4A3A 56%, #254F3F 100%)',
          color: '#F7F3ED',
          padding: '72px 84px',
          fontFamily: fontData ? 'Cormorant' : 'serif'
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 420,
            height: 420,
            borderRadius: 999,
            background: 'rgba(200, 146, 42, 0.24)',
            filter: 'blur(6px)',
            left: -90,
            top: -120
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            borderRadius: 999,
            background: 'rgba(247, 243, 237, 0.10)',
            right: -130,
            bottom: -180
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 34,
            border: '1px solid rgba(247, 243, 237, 0.18)',
            borderRadius: 36
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 28, letterSpacing: 5, textTransform: 'uppercase', color: '#E7C46A' }}>
            <span>Alexis Lyon</span>
            <span style={{ width: 96, height: 2, background: '#C8922A' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, maxWidth: 930 }}>
            <h1 style={{ margin: 0, fontSize: title.length > 48 ? 74 : 88, lineHeight: 0.94, letterSpacing: -1.5, fontWeight: 600 }}>
              {title}
            </h1>
            <div style={{ width: 180, height: 4, background: '#C8922A', borderRadius: 999 }} />
            <p style={{ margin: 0, maxWidth: 760, fontSize: 34, lineHeight: 1.22, color: 'rgba(247, 243, 237, 0.86)' }}>
              {subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(247, 243, 237, 0.72)', fontSize: 26 }}>
            <span>Healing for the wound. Reclaiming for the wildness.</span>
            <span style={{ color: '#E7C46A' }}>alexislyon.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData ? [{ name: 'Cormorant', data: fontData, weight: 600, style: 'normal' }] : []
    }
  );
}
