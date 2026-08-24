export default function TabExamples({title, menuContent, children, TabComponent = 'menu', ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            <TabComponent>
                {menuContent}                                
            </TabComponent>
            {children}
        </section>
    );
}