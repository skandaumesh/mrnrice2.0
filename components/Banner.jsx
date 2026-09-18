import Link from "next/link";

/**
 * Dark page banner with a photograph behind it. Takes `photoSrc` rather than a
 * photo object so the object's caption and credit are not serialised into the
 * page payload — the image here is decorative and nothing else is rendered.
 */
export default function Banner({ crumb, title, children, photoSrc }) {
  return (
    <section className="banner">
      {photoSrc && <img src={photoSrc} alt="" aria-hidden="true" />}
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
