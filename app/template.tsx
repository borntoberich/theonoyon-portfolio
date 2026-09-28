/** Remonté à chaque navigation : fondu d'entrée de la nouvelle page. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
