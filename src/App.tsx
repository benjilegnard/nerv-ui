function App() {
  return (
    <main
      style={{ display: "grid", placeItems: "center", minHeight: "100svh", textAlign: "center" }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--nerv-font-mincho)",
            fontWeight: 800,
            fontSize: "var(--nerv-text-xl)",
            letterSpacing: "var(--nerv-tracking-mincho)",
            color: "var(--nerv-vermilion)",
          }}
        >
          非常事態
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--nerv-font-display)",
            fontWeight: 800,
            fontSize: "var(--nerv-text-display)",
            lineHeight: "var(--nerv-leading-none)",
            color: "var(--nerv-vermilion)",
          }}
        >
          NERV UI
        </h1>
        <p style={{ fontFamily: "var(--nerv-font-ui)" }}>
          Run `pnpm storybook` for the component docs.
        </p>
      </div>
    </main>
  );
}

export default App;
