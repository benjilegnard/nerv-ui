import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import "./blocks.css";

/** Reads the computed value of a custom property on :root. */
function readToken(token: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

/** Dark canvas so tokens are shown on the background they were designed for. */
export function Panel({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="nerv-doc-panel sb-unstyled" style={style}>
      {children}
    </div>
  );
}

export interface SwatchProps {
  token: string;
  note?: string;
}

function Swatch({ token, note }: SwatchProps) {
  const value = readToken(token);
  return (
    <figure className="nerv-doc-swatch">
      <div className="nerv-doc-swatch__chip" style={{ background: `var(${token})` }} />
      <figcaption>
        <code>{token}</code>
        <span className="nerv-doc-swatch__value">{value}</span>
        {note && <span className="nerv-doc-swatch__note">{note}</span>}
      </figcaption>
    </figure>
  );
}

export function Swatches({ tokens }: { tokens: SwatchProps[] }) {
  return (
    <Panel>
      <div className="nerv-doc-swatches">
        {tokens.map((t) => (
          <Swatch key={t.token} {...t} />
        ))}
      </div>
    </Panel>
  );
}

export interface TokenRowProps {
  token: string;
  /** Renders a preview using the token, e.g. a bar for spacing. */
  preview?: (token: string) => ReactNode;
}

function TokenRow({ token, preview }: TokenRowProps) {
  const value = readToken(token);
  return (
    <tr>
      <td>
        <code>{token}</code>
      </td>
      <td className="nerv-doc-table__value">{value}</td>
      <td>{preview?.(token)}</td>
    </tr>
  );
}

export function TokenTable({
  tokens,
  preview,
}: {
  tokens: string[];
  preview?: TokenRowProps["preview"];
}) {
  return (
    <Panel>
      <table className="nerv-doc-table">
        <tbody>
          {tokens.map((token) => (
            <TokenRow key={token} token={token} preview={preview} />
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

/** Shows whether the browser managed to load a given face. */
function FontStatus({ family, weight, style }: { family: string; weight: number; style: string }) {
  const [loaded, setLoaded] = useState<boolean | null>(null);
  useEffect(() => {
    const spec = `${style} ${weight} 16px "${family}"`;
    let cancelled = false;
    // document.fonts.check() is true for undeclared families, so look for an
    // actual loaded face instead.
    const check = () =>
      document.fonts.load(spec, "A").then(() => {
        if (cancelled) return;
        const faces = [...document.fonts].filter(
          (f) =>
            f.family.replace(/["']/g, "") === family &&
            f.weight === String(weight) &&
            f.style === style &&
            f.status === "loaded",
        );
        setLoaded(faces.length > 0);
      });
    void check();
    // re-check when the font source is switched from the toolbar
    document.fonts.addEventListener("loadingdone", check);
    return () => {
      cancelled = true;
      document.fonts.removeEventListener("loadingdone", check);
    };
  }, [family, weight, style]);
  if (loaded === null) return <span className="nerv-doc-status">…</span>;
  return (
    <span className={`nerv-doc-status ${loaded ? "is-ok" : "is-missing"}`}>
      {loaded ? "LOADED" : "FALLBACK"}
    </span>
  );
}

export interface SpecimenProps {
  /** Font family name as registered by @font-face. */
  family: string;
  /** Token the family is used by, if any. */
  token?: string;
  weights: number[];
  italic?: boolean;
  sample: string;
  size?: string;
  color?: string;
  letterSpacing?: string;
  notes?: ReactNode;
}

export function Specimen({
  family,
  token,
  weights,
  italic = false,
  sample,
  size = "var(--nerv-text-2xl)",
  color = "var(--nerv-amber)",
  letterSpacing,
  notes,
}: SpecimenProps) {
  const fontStyle = italic ? "italic" : "normal";
  return (
    <Panel>
      <header className="nerv-doc-specimen__header">
        <strong>{family}</strong>
        {token && <code>{token}</code>}
      </header>
      {notes && <p className="nerv-doc-specimen__notes">{notes}</p>}
      {weights.map((weight) => (
        <div key={weight} className="nerv-doc-specimen__row">
          <span className="nerv-doc-specimen__meta">
            {weight}
            {italic && " italic"} <FontStatus family={family} weight={weight} style={fontStyle} />
          </span>
          <span
            className="nerv-doc-specimen__sample"
            style={{
              fontFamily: `"${family}"`,
              fontWeight: weight,
              fontStyle,
              fontSize: size,
              color,
              letterSpacing,
            }}
          >
            {sample}
          </span>
        </div>
      ))}
    </Panel>
  );
}

/** Same text in several families, to compare candidates side by side. */
export function Compare({
  families,
  sample,
  weight = 700,
  size = "var(--nerv-text-2xl)",
}: {
  families: string[];
  sample: string;
  weight?: number;
  size?: string;
}) {
  return (
    <Panel>
      {families.map((family) => (
        <div key={family} className="nerv-doc-specimen__row">
          <span className="nerv-doc-specimen__meta">
            {family} {weight} <FontStatus family={family} weight={weight} style="normal" />
          </span>
          <span
            className="nerv-doc-specimen__sample"
            style={{ fontFamily: `"${family}"`, fontWeight: weight, fontSize: size, color: "var(--nerv-amber)" }}
          >
            {sample}
          </span>
        </div>
      ))}
    </Panel>
  );
}

/** Seven-segment readout with the unlit segments drawn underneath. */
export function SegmentDemo({ value, ghost }: { value: string; ghost: string }) {
  return (
    <div className="nerv-doc-segment">
      <span aria-hidden="true">{ghost}</span>
      <span>{value}</span>
    </div>
  );
}
