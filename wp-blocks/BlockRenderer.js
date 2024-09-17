import Container from "./Container";


export default function BlockRenderer({ elementorData }) {
  console.log(elementorData, 'yeearp');
  return elementorData?.map((element) => {
    switch (element.elType) {
      case "container":
        return (
          <Container key={element.id} style={{ border: "1px solid black" }}>
            <BlockRenderer key={element.id} style={{ border: "1px solid black" }} elementorData={element.elements} />
          </Container>
        );
      case "widget":
        switch (element.widgetType) {
          case "heading":
            return (
              <h1 key={element.id} style={{ color: element.settings.color }}>
                {element.settings.text}
              </h1>
            );
          case "image":
            return (
              <img key={element.id} src={element.settings.src} alt={element.settings.alt} />
            );
          case "button":
            return (
              <button key={element.id} onClick={() => console.log("Button clicked")}>
                {element.settings.text}
              </button>
            );
          case "text-editor":
            return (
              <div key={element.id} dangerouslySetInnerHTML={{ __html: element.settings.content }} />
            );
          default:
            console.log(element.widgetType + " is not a valid widget type");
            return null;
        }
        return <div key={element.id}>{element.content}</div>;
      // case "image":
      //   return <img key={element.id} src={element.src} alt={element.alt} />;
      // case "button":
      //   // Example of handling the `onClick` action
      //   const handleClick = () => {
      //     console.log("Button clicked");
      //   };
      //   return (
      //     <button key={element.id} onClick={handleClick}>
      //       {element.text}
      //     </button>
      //   );
      default:
        console.log(element.elType + " is not a valid element type");
        return null;
    }
  });
}
