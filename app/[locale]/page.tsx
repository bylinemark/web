import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/app/components/ui/contact/contact-form";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <main>
      <div className="h-screen"></div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen">
        <Image
          src="/images/Logo_Mockup_1_Wall.png"
          alt="Linemark Studio Hero Image"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{t("contact.title")}</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
