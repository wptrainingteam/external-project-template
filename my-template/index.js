/**
 * Dependencies
 */
const { join } = require("path");

module.exports = {
  defaultValues: {
    transformer: (view) => {
      console.log(view);
      return { ...view, pluginDependencies: "gutenberg" };
    },
    version: "1.0.0",
    namespace: "developer-blog",
    customPackageJSON: {
      prettier: "@wordpress/prettier-config",
    },
  },
  variants: {
    dynamic: {
      render: "file:./render.php",
    },
    static: {},
    interactive: {
      supports: {
        interactive: true,
      },
    },
    plugin: {},
  },
  pluginTemplatesPath: join(__dirname, "files/plugin"),
  blockTemplatesPath: join(__dirname, "files/block"),
};
