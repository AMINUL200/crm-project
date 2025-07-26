import FinanceCard from "../../components/Animation/finance/FinanceCard"
import ExpensesCard from "../../components/charts/bar/ExpensesCard ";
import ProgressCard from "../../components/charts/curecle/ProgressCard"
import TaskProgressCard from "../../components/charts/curecle/TaskProgressCard ";
import ProjectsOverviewCard from "../../components/charts/line/ProjectsOverviewCard ";
import RevenueCard from "../../components/charts/line/RevenueCard ";
import TotalDepositCard from "../../components/charts/line/TotalDepositCard";
import ActiveProjectsTable from "../../components/common/ActiveProjectsTable";
import ToDoListCard from "../../components/common/ToDoListCard";





const Dashboard = () => {

    return (
        <div className="min-h-screen bg-gray-50 p-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 pb-10">
                <div className='flex flex-col gap-2'>
                    <RevenueCard />
                    <TaskProgressCard />
                </div>
                <div className='flex flex-col gap-2'>
                    <ExpensesCard />
                    <TotalDepositCard />
                </div>
                <FinanceCard />
                <ProgressCard />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
                <ProjectsOverviewCard/>
                <ToDoListCard/>

            </div>

            <div className="py-6">
                <ActiveProjectsTable/>
            </div>


        </div>
    )
}

export default Dashboard
