import ActiveSubscriptionsCard from "../../components/sales/ActiveSubscriptionsCard"
import RecentActivities from "../../components/sales/RecentActivities"
import RevenueCard from "../../components/sales/RevenueCard"
import SalesOverviewCard from "../../components/sales/SalesOverviewCard"
import AvgSubscriptionsCard from "../../components/sales/subscriptionData"
import TransactionsTable from "../../components/sales/TransactionsTable"

const Sales = () => {
  return (
    <div className="bg-gray-50 p-2 h-full w-full">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <RevenueCard />
          <div className="flex flex-row gap-4">
            <AvgSubscriptionsCard />
            <ActiveSubscriptionsCard />
          </div>
        </div>
        <SalesOverviewCard />
      </div>

      {/* ➤ Transactions & Recent Activities */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <TransactionsTable />
        </div>
        <div className="lg:col-span-4">

        <RecentActivities />
        </div>
      </div>

    </div>
  )
}

export default Sales
