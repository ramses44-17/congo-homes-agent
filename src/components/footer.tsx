import Image from "next/image"
export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center">
        <Image
          src="/WhatsApp Image 2024-12-05 à 18.21.38_d119578c.jpg"
          alt="Congo Homes Logo"
          width={150}
          height={75}
          className="mx-auto mb-4"
        />
        <p className="text-gray-600">
          © 2024 Congo Homes. L&apos;immobilier du futur, dès aujourd&apos;hui.
        </p>
      </div>
    </div>
  </footer>
  );
}