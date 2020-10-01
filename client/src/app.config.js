export default ({ config }) => ({
    expo: {
      ...config,
      extra: {
        BACKEND_URL: "https://recipemanager-291113.ew.r.appspot.com/",
      },
    },
  });