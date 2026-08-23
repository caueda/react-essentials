export default function TabExamples({title, menuContent, children, tabComponent, ...props}) {
    const TabComponent = tabComponent;
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