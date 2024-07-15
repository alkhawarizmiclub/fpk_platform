const Error404Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="font-semibold text-5xl">Page inaccessible !</h1>
            <p>La page que vous avez demandée est inexistante ou vous n'avez pas l'autorisation d'y accéder.</p>
        </div>
    );
}

export default Error404Page;