export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-[#193C40]">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-300">Looks like you’re lost — <a href="/" className="text-[#EF4444] underline">go back home</a>.</p>
    </div>
  );
}
