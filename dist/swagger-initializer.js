window.onload = function () {
  function HideTopbarPlugin() {
    return {
      components: {
        Topbar: function () {
          return null;
        }
      }
    }
  }

  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    spec: window.solaceSwaggerUiSpec,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      HideTopbarPlugin
    ],
    layout: "StandaloneLayout",
    defaultModelsExpandDepth: 999,
    defaultModelExpandDepth: 999,
    defaultModelRendering: "model",
    validatorUrl: null,
    supportedSubmitMethods: [],
    docExpansion: "none",
    onComplete: function () {
      // Add Solace logo
      setTimeout(() => {
        var img = document.createElement("img");
        img.style.height = "55px";
        img.src = "./header.png";
        img.alt = "Solace";
        var a = document.createElement("a");
        a.href = "https://www.solace.com";
        a.append(img);
        var div = document.createElement("div");
        div.style.paddingBottom = "20px";
        div.append(a);
        document.getElementsByClassName("info")[0].prepend(div);
      }, 0);
    }
  });

  //</editor-fold>
};
