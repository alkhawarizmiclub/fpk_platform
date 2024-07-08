import StaticPageHeader from "../components/StaticPageHeader";

const StaticPageContainer = ({ page_title, children }) => {
    return (
        <div className="mx-auto w-full max-w-[1300px] shadow bg-white">
            <StaticPageHeader page_title={page_title} />
            <div className="p-5">
                {children}
            </div>
        </div>
    );
}

export default StaticPageContainer;