export default function TabExamples({title, tabContent, children, id}) {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <menu>
                {children}                
            </menu>
            {tabContent}
        </section>
    );
}