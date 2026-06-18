import { ContactForm } from "@/app/components/ui/contact/contact-form";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <main>
      <div className="h-200">
        <div className="container h-full flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Lorem ipsum dolor sit</h1>
            <p className="text-xl text-gray-300 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aspernatur enim quos.</p>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("contact.title")}</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
