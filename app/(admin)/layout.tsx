
import "/app/globals.css";
import Navbar from "@/components/navbar";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
