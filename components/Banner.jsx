import Link from "next/link";

/** Dark page banner with a photograph behind it. */
export default function Banner({ crumb, title, children, photo }) {
  return (
    <section className="banner">
      {photo && <img src={photo.src} alt="" aria-hidden="true" />}
      <div className="shell banner-inner">
        <p className="crumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {crumb}
        </p>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
