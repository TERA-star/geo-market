export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} GeoMarket. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
