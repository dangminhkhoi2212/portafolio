const DividerPattern = () => (
  <div className="relative flex h-8 w-full items-center justify-center border border-border before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--border)]/56">
    <div className="h-full w-full border-x border-border md:max-w-3xl" />
  </div>
)
export default DividerPattern
