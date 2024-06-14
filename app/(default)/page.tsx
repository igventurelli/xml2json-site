export const metadata = {
  title: "XML2JSON",
  description: "Convert XML responses into JSON with a simple HTTP request",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="XML2JSON"
            description="A simple HTTP endpoint to convert XML payloads into JSON."
            innerDescription="See in action:"
          >
            Now live!
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
