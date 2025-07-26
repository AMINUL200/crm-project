import AnalyticsBanner from "../../components/Analytics/AnalyticsBanner"
import AnalyticsSale from "../../components/Analytics/AnalyticsSale"
import AnalyticsSection from "../../components/Analytics/AnalyticsSection"
import EarningReport from "../../components/Analytics/EarningReport"

const Analytics = () => {
    return (
        <>
           <AnalyticsBanner/>
           <AnalyticsSection/>
           <div className="py-8">
           <EarningReport/>
           </div>
           <AnalyticsSale/>

        </>
    )
}

export default Analytics
