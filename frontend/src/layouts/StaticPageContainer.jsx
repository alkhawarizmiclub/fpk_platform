import StaticPageHeader from "../components/StaticPageHeader";

const StaticPageContainer = ({ page_title, children }) => {
    return (
        <>
            <StaticPageHeader page_title={page_title} />
            <div className="p-5">
                {children}
            </div>
        </>
    );
}

export default StaticPageContainer;