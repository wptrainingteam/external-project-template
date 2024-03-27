/**
 * Dependencies
 */
const { join } = require("path");

module.exports = {
  defaultValues: {
    transformer: (view) => {
      const {
        variantVars: { isInteractiveVariant },
      } = view;
      return {
        ...view,
        requiresAtLeast: isInteractiveVariant ? "6.5" : "6.1",
      };
    },
    version: "1.0.0",
    namespace: "developer-blog",
    render: "file:./render.php",
    customPackageJSON: {
      prettier: "@wordpress/prettier-config",
    },
  },
  variants: {
    dynamic: {},
    interactive: {
      viewScriptModule: "file:./view.js",
      customScripts: {
        build: "wp-scripts build --experimental-modules",
        start: "wp-scripts start --experimental-modules",
      },
      supports: {
        interactive: true,
      },
    },
  },
  pluginTemplatesPath: join(__dirname, "files/plugin"),
  blockTemplatesPath: join(__dirname, "files/block"),
};
