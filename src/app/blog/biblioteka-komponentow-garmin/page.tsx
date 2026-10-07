import { BlogArticle } from "@/components/templates/BlogArticle";
import { blogPosts } from "@/data/blogPosts";
import { createPageMetadata, siteUrl } from "@/lib/seo";

const path = "/blog/biblioteka-komponentow-garmin/";
const post = blogPosts.find((entry) => entry.link === path)!;
const repository = "https://github.com/Snikerso/ConnectIQComponents";

const pageMetadata = createPageMetadata({ title: post.title, description: post.description!, path });
export const metadata = { ...pageMetadata, openGraph: { ...pageMetadata.openGraph, locale: "en_US" } };
const jsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: post.title, description: post.description,
  datePublished: "2026-10-07", dateModified: "2026-10-07", inLanguage: "en",
  author: { "@type": "Person", name: "Paweł Drojecki", url: siteUrl },
  mainEntityOfPage: new URL(path, siteUrl).toString(),
};
const example = `var theme = new ConnectIQComponents.Theme({
    :accent => 0xB3DFAC
});
var button = new ConnectIQComponents.Button({
    :text => "Brew tea",
    :x => 80, :y => 220,
    :width => 200, :height => 50,
    :style => {:radius => 25},
    :onPress => method(:startBrewing)
}, theme);

// In the view’s onUpdate(dc):
button.draw(dc, 0, 0);

// After updating application state:
button.setProps({:text => "Done"});
WatchUi.requestUpdate();`;
const components = [
  ["Button / OutlineButton", "Filled or outlined button with an onPress callback."],
  ["Panel / Label", "Rounded surface and text truncated to fit the available width."],
  ["Badge / Divider", "Text badge and a horizontal or vertical separator."],
  ["ProgressBar / ProgressRing", "Progress from 0 to 1, displayed as a bar or segmented ring."],
];

export default function GarminComponentsPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle language="en" title={post.title} lead="I built a UI library in Monkey C for Garmin Connect IQ, extracting reusable elements from my watch apps. The library is used in TeaStop and Knitting Counter Pro, with shared components and a customizable theme."
        date="2026-10-07" dateLabel="October 7, 2026" tags={post.tags}
        action={{ href: repository, label: "GitHub repository" }}
        sections={[{ id: "zakres", label: "Components" }, { id: "api", label: "API and themes" }, { id: "teastop", label: "TeaStop integration" }, { id: "instalacja", label: "Installation" }]}>
        <section id="zakres">
          <h2>8 components, one theme</h2>
          <p>I was repeating code for drawing buttons, cards and indicators in Knitting Counter Pro and TeaStop. I moved these elements into a separate repository called <strong>ConnectIQComponents</strong>. Version 0.2.0 includes:</p>
          <dl className="mt-5 divide-y divide-gray-200 border-y border-gray-200">{components.map(([name, detail]) => <div key={name} className="py-4"><dt className="font-ibm text-sm font-semibold text-black">{name}</dt><dd className="mt-1 text-sm leading-6 text-gray-600">{detail}</dd></div>)}</dl>
          <p className="mt-5">Each component accepts a position, dimensions, visibility and local styles. The theme defines colors, fonts, spacing and corner radius. Components do not depend on application data or storage.</p>
        </section>
        <section id="api">
          <h2>React inspired props and composition</h2>
          <p>I pass props in a Monkey C dictionary. The <code>add(child)</code> method nests child components, while <code>setProps()</code> updates their content and appearance. Individual components can override the shared theme using <code>:style</code> props.</p>
          <figure className="mt-5 min-w-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
            <figcaption className="flex items-center justify-between border-b border-gray-800 px-5 py-3 font-ibm text-xs text-gray-400"><span>A themed button with a text update</span><span className="ml-4 shrink-0">Monkey C</span></figcaption>
            <pre tabIndex={0} aria-label="Monkey C code example" className="overflow-x-auto p-5 text-[13px] leading-6 text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><code>{example}</code></pre>
          </figure>
          <p className="mt-5"><code>startBrewing</code> is an application method. Touch input is forwarded through <code>press()</code> or the <code>ComponentDelegate</code> adapter. Rendering uses Garmin Graphics and WatchUi, and I explicitly request a redraw after state changes. Layout dimensions are in pixels, so the application is responsible for adapting to each screen.</p>
        </section>
        <section id="teastop">
          <h2>What changed in TeaStop</h2>
          <p>I added the library as a Git submodule pinned to <strong>v0.2.0</strong>. The adapter <code>TeaComponents.mc</code> maps TeaStop colors to the library theme and reuses component instances during rendering.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
            <li>The “+ Add”, “Brew tea”, “Options” and time adjustment buttons use Button or OutlineButton.</li>
            <li>Tea list cards use Panel, and the name editor separator uses Divider.</li>
            <li>The segmented brewing indicator uses ProgressRing.</li>
          </ul>
          <p className="mt-4">TeaStop delegates still handle actions and touch hit testing. Timers, alarms and session storage remain in the app. The integration changes the drawing layer.</p>
          <div className="mt-5 rounded-lg border-l-4 border-accent bg-gray-50 p-5 text-sm leading-7"><p className="font-semibold text-black">Integration checks</p><p>Builds passed for Venu 3, fēnix 7S, Venu Sq 2 and Forerunner 965. All 9 simulator tests passed, covering 7 application regression tests and 2 UI adapter tests. I also checked that TeaStop launches in the Venu 3 simulator. Testing on physical watches is still pending.</p></div>
        </section>
        <section id="instalacja">
          <h2>Using it in another project</h2>
          <p>The repository is public and licensed under MIT. You can include the source files or build a Monkey Barrel package. For source integration, I add the repository as a submodule, pin a tag and extend <code>monkey.jungle</code>:</p>
          <pre tabIndex={0} aria-label="Library source path configuration" className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 font-ibm text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"><code>base.sourcePath = source;vendor/ConnectIQComponents/source</code></pre>
          <p className="mt-5">The library includes documentation, an example app and tests. The API is still experimental, so I pin a specific version and update the dependency deliberately.</p>
        </section>
      </BlogArticle>
    </>
  );
}
