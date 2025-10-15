import { useTranslation } from "next-i18next";

export function DashboardContent() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {t("dashboard.welcome", "Welcome to your Dashboard")}
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              {t(
                "dashboard.description",
                "Manage your products, view orders, and track your performance all in one place."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: t("dashboard.stats.products", "Total Products"),
            value: "0",
            change: "+0%",
            type: "increase",
          },
          {
            title: t("dashboard.stats.orders", "Total Orders"),
            value: "0",
            change: "+0%",
            type: "increase",
          },
          {
            title: t("dashboard.stats.revenue", "Revenue"),
            value: "₾0",
            change: "+0%",
            type: "increase",
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {stat.title}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {stat.value}
            </dd>
            <dd className="mt-2">
              <span className="text-sm text-gray-500">
                {stat.change} from last month
              </span>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
