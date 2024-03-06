import { PropsWithChildren, type ReactNode } from "react";

import "./page.scss";

function PageWrapper({ children }: PropsWithChildren): ReactNode {
  return (
    <main className="page">
      <section className="page__content">{children}</section>
    </main>
  );
}

export { PageWrapper };
