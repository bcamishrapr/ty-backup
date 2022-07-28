/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/techdocs */ \"./src/plugins/techdocs.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/*\n * Hi!\n *\n * Note that this is an EXAMPLE Backstage backend. Please check the README.\n *\n * Happy hacking!\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction makeCreateEnv(config) {\n  const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)();\n  const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.UrlReaders[\"default\"]({ logger: root, config });\n  const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.SingleHostDiscovery.fromConfig(config);\n  const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.CacheManager.fromConfig(config);\n  const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.DatabaseManager.fromConfig(config);\n  const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.ServerTokenManager.noop();\n  const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__.TaskScheduler.fromConfig(config);\n  const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_10__.ServerPermissionClient.fromConfig(config, {\n    discovery,\n    tokenManager,\n  });\n\n  root.info(`Created UrlReader ${reader}`);\n\n  return (plugin) => {\n    const logger = root.child({ type: 'plugin', plugin });\n    const database = databaseManager.forPlugin(plugin);\n    const cache = cacheManager.forPlugin(plugin);\n    const scheduler = taskScheduler.forPlugin(plugin);\n    return {\n      logger,\n      database,\n      cache,\n      config,\n      reader,\n      discovery,\n      tokenManager,\n      scheduler,\n      permissions,\n    };\n  };\n}\n\nasync function main() {\n  const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.loadBackendConfig)({\n    argv: process.argv,\n    logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)(),\n  });\n  const createEnv = makeCreateEnv(config);\n\n  const catalogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('catalog'));\n  const scaffolderEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('scaffolder'));\n  const authEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('auth'));\n  const proxyEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('proxy'));\n  const techdocsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('techdocs'));\n  const searchEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('search'));\n  const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, () => createEnv('app'));\n\n  const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_0___default()();\n  apiRouter.use('/catalog', await (0,_plugins_catalog__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(catalogEnv));\n  apiRouter.use('/scaffolder', await (0,_plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(scaffolderEnv));\n  apiRouter.use('/auth', await (0,_plugins_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(authEnv));\n  apiRouter.use('/techdocs', await (0,_plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(techdocsEnv));\n  apiRouter.use('/proxy', await (0,_plugins_proxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(proxyEnv));\n  apiRouter.use('/search', await (0,_plugins_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(searchEnv));\n\n  // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n  apiRouter.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.notFoundHandler)());\n\n  const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.createServiceBuilder)(module)\n    .loadConfig(config)\n    .addRouter('/api', apiRouter)\n    .addRouter('', await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appEnv));\n\n  await service.start().catch(err => {\n    console.log(err);\n    process.exit(1);\n  });\n}\n\nmodule.hot.accept();\nmain().catch(error => {\n  console.error(`Backend failed to start up, ${error}`);\n  process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9yb290L3R5LWJhY2t1cC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogSGkhXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgaXMgYW4gRVhBTVBMRSBCYWNrc3RhZ2UgYmFja2VuZC4gUGxlYXNlIGNoZWNrIHRoZSBSRUFETUUuXG4gKlxuICogSGFwcHkgaGFja2luZyFcbiAqL1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2VydmljZUJ1aWxkZXIsXG4gIGxvYWRCYWNrZW5kQ29uZmlnLFxuICBnZXRSb290TG9nZ2VyLFxuICB1c2VIb3RNZW1vaXplLFxuICBub3RGb3VuZEhhbmRsZXIsXG4gIENhY2hlTWFuYWdlcixcbiAgRGF0YWJhc2VNYW5hZ2VyLFxuICBTaW5nbGVIb3N0RGlzY292ZXJ5LFxuICBVcmxSZWFkZXJzLFxuICBTZXJ2ZXJUb2tlbk1hbmFnZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgVGFza1NjaGVkdWxlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC10YXNrcyc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9wbHVnaW5zL2FwcCc7XG5pbXBvcnQgYXV0aCBmcm9tICcuL3BsdWdpbnMvYXV0aCc7XG5pbXBvcnQgY2F0YWxvZyBmcm9tICcuL3BsdWdpbnMvY2F0YWxvZyc7XG5pbXBvcnQgc2NhZmZvbGRlciBmcm9tICcuL3BsdWdpbnMvc2NhZmZvbGRlcic7XG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wbHVnaW5zL3Byb3h5JztcbmltcG9ydCB0ZWNoZG9jcyBmcm9tICcuL3BsdWdpbnMvdGVjaGRvY3MnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3BsdWdpbnMvc2VhcmNoJztcblxuaW1wb3J0IHsgU2VydmVyUGVybWlzc2lvbkNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXBlcm1pc3Npb24tbm9kZSc7XG5cbmZ1bmN0aW9uIG1ha2VDcmVhdGVFbnYoY29uZmlnKSB7XG4gIGNvbnN0IHJvb3QgPSBnZXRSb290TG9nZ2VyKCk7XG4gIGNvbnN0IHJlYWRlciA9IFVybFJlYWRlcnMuZGVmYXVsdCh7IGxvZ2dlcjogcm9vdCwgY29uZmlnIH0pO1xuICBjb25zdCBkaXNjb3ZlcnkgPSBTaW5nbGVIb3N0RGlzY292ZXJ5LmZyb21Db25maWcoY29uZmlnKTtcbiAgY29uc3QgY2FjaGVNYW5hZ2VyID0gQ2FjaGVNYW5hZ2VyLmZyb21Db25maWcoY29uZmlnKTtcbiAgY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gRGF0YWJhc2VNYW5hZ2VyLmZyb21Db25maWcoY29uZmlnKTtcbiAgY29uc3QgdG9rZW5NYW5hZ2VyID0gU2VydmVyVG9rZW5NYW5hZ2VyLm5vb3AoKTtcbiAgY29uc3QgdGFza1NjaGVkdWxlciA9IFRhc2tTY2hlZHVsZXIuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IFNlcnZlclBlcm1pc3Npb25DbGllbnQuZnJvbUNvbmZpZyhjb25maWcsIHtcbiAgICBkaXNjb3ZlcnksXG4gICAgdG9rZW5NYW5hZ2VyLFxuICB9KTtcblxuICByb290LmluZm8oYENyZWF0ZWQgVXJsUmVhZGVyICR7cmVhZGVyfWApO1xuXG4gIHJldHVybiAocGx1Z2luKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gcm9vdC5jaGlsZCh7IHR5cGU6ICdwbHVnaW4nLCBwbHVnaW4gfSk7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBkYXRhYmFzZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3QgY2FjaGUgPSBjYWNoZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGFza1NjaGVkdWxlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VyLFxuICAgICAgZGF0YWJhc2UsXG4gICAgICBjYWNoZSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlYWRlcixcbiAgICAgIGRpc2NvdmVyeSxcbiAgICAgIHRva2VuTWFuYWdlcixcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgIHBlcm1pc3Npb25zLFxuICAgIH07XG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRCYWNrZW5kQ29uZmlnKHtcbiAgICBhcmd2OiBwcm9jZXNzLmFyZ3YsXG4gICAgbG9nZ2VyOiBnZXRSb290TG9nZ2VyKCksXG4gIH0pO1xuICBjb25zdCBjcmVhdGVFbnYgPSBtYWtlQ3JlYXRlRW52KGNvbmZpZyk7XG5cbiAgY29uc3QgY2F0YWxvZ0VudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2NhdGFsb2cnKSk7XG4gIGNvbnN0IHNjYWZmb2xkZXJFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdzY2FmZm9sZGVyJykpO1xuICBjb25zdCBhdXRoRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignYXV0aCcpKTtcbiAgY29uc3QgcHJveHlFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdwcm94eScpKTtcbiAgY29uc3QgdGVjaGRvY3NFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCd0ZWNoZG9jcycpKTtcbiAgY29uc3Qgc2VhcmNoRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignc2VhcmNoJykpO1xuICBjb25zdCBhcHBFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdhcHAnKSk7XG5cbiAgY29uc3QgYXBpUm91dGVyID0gUm91dGVyKCk7XG4gIGFwaVJvdXRlci51c2UoJy9jYXRhbG9nJywgYXdhaXQgY2F0YWxvZyhjYXRhbG9nRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9zY2FmZm9sZGVyJywgYXdhaXQgc2NhZmZvbGRlcihzY2FmZm9sZGVyRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9hdXRoJywgYXdhaXQgYXV0aChhdXRoRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy90ZWNoZG9jcycsIGF3YWl0IHRlY2hkb2NzKHRlY2hkb2NzRW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9wcm94eScsIGF3YWl0IHByb3h5KHByb3h5RW52KSk7XG4gIGFwaVJvdXRlci51c2UoJy9zZWFyY2gnLCBhd2FpdCBzZWFyY2goc2VhcmNoRW52KSk7XG5cbiAgLy8gQWRkIGJhY2tlbmRzIEFCT1ZFIHRoaXMgbGluZTsgdGhpcyA0MDQgaGFuZGxlciBpcyB0aGUgY2F0Y2gtYWxsIGZhbGxiYWNrXG4gIGFwaVJvdXRlci51c2Uobm90Rm91bmRIYW5kbGVyKCkpO1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBjcmVhdGVTZXJ2aWNlQnVpbGRlcihtb2R1bGUpXG4gICAgLmxvYWRDb25maWcoY29uZmlnKVxuICAgIC5hZGRSb3V0ZXIoJy9hcGknLCBhcGlSb3V0ZXIpXG4gICAgLmFkZFJvdXRlcignJywgYXdhaXQgYXBwKGFwcEVudikpO1xuXG4gIGF3YWl0IHNlcnZpY2Uuc3RhcnQoKS5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9KTtcbn1cblxubW9kdWxlLmhvdD8uYWNjZXB0KCk7XG5tYWluKCkuY2F0Y2goZXJyb3IgPT4ge1xuICBjb25zb2xlLmVycm9yKGBCYWNrZW5kIGZhaWxlZCB0byBzdGFydCB1cCwgJHtlcnJvcn1gKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    appPackageName: 'app',\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vcm9vdC90eS1iYWNrdXAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYXBwLWJhY2tlbmQnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnYsXG4pIHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIGFwcFBhY2thZ2VOYW1lOiAnYXBwJyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    providerFactories: {\n      ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n\n      // This replaces the default GitHub auth provider with a customized one.\n      // The `signIn` option enables sign-in for this provider, using the\n      // identity resolution logic that's provided in the `resolver` callback.\n      //\n      // This particular resolver makes all users share a single \"guest\" identity.\n      // It should only be used for testing and trying out Backstage.\n      //\n      // If you want to use a production ready resolver you can switch to the\n      // the one that is commented out below, it looks up a user entity in the\n      // catalog using the GitHub username of the authenticated user.\n      // That resolver requires you to have user entities populated in the catalog,\n      // for example using https://backstage.io/docs/integrations/github/org\n      //\n      // There are other resolvers to choose from, and you can also create\n      // your own, see the auth documentation for more details:\n      //\n      //   https://backstage.io/docs/auth/identity-resolver\n      github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n        signIn: {\n          /*resolver(_, ctx) {          \n            const userRef = 'user:default/guest'; // Must be a full entity reference\n            return ctx.issueToken({\n              claims: {\n                sub: userRef, // The user's own identity\n                ent: [userRef], // A list of identities that the user claims ownership through\n              },\n            });\n          },*/\n           resolver: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.resolvers.usernameMatchingUserEntityName(),\n        },\n      }),\n    },\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL3Jvb3QvdHktYmFja3VwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVSb3V0ZXIsXG4gIHByb3ZpZGVycyxcbiAgZGVmYXVsdEF1dGhQcm92aWRlckZhY3Rvcmllcyxcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tYXV0aC1iYWNrZW5kJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52LFxuKSB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgdG9rZW5NYW5hZ2VyOiBlbnYudG9rZW5NYW5hZ2VyLFxuICAgIHByb3ZpZGVyRmFjdG9yaWVzOiB7XG4gICAgICAuLi5kZWZhdWx0QXV0aFByb3ZpZGVyRmFjdG9yaWVzLFxuXG4gICAgICAvLyBUaGlzIHJlcGxhY2VzIHRoZSBkZWZhdWx0IEdpdEh1YiBhdXRoIHByb3ZpZGVyIHdpdGggYSBjdXN0b21pemVkIG9uZS5cbiAgICAgIC8vIFRoZSBgc2lnbkluYCBvcHRpb24gZW5hYmxlcyBzaWduLWluIGZvciB0aGlzIHByb3ZpZGVyLCB1c2luZyB0aGVcbiAgICAgIC8vIGlkZW50aXR5IHJlc29sdXRpb24gbG9naWMgdGhhdCdzIHByb3ZpZGVkIGluIHRoZSBgcmVzb2x2ZXJgIGNhbGxiYWNrLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgcGFydGljdWxhciByZXNvbHZlciBtYWtlcyBhbGwgdXNlcnMgc2hhcmUgYSBzaW5nbGUgXCJndWVzdFwiIGlkZW50aXR5LlxuICAgICAgLy8gSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgdGVzdGluZyBhbmQgdHJ5aW5nIG91dCBCYWNrc3RhZ2UuXG4gICAgICAvL1xuICAgICAgLy8gSWYgeW91IHdhbnQgdG8gdXNlIGEgcHJvZHVjdGlvbiByZWFkeSByZXNvbHZlciB5b3UgY2FuIHN3aXRjaCB0byB0aGVcbiAgICAgIC8vIHRoZSBvbmUgdGhhdCBpcyBjb21tZW50ZWQgb3V0IGJlbG93LCBpdCBsb29rcyB1cCBhIHVzZXIgZW50aXR5IGluIHRoZVxuICAgICAgLy8gY2F0YWxvZyB1c2luZyB0aGUgR2l0SHViIHVzZXJuYW1lIG9mIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIuXG4gICAgICAvLyBUaGF0IHJlc29sdmVyIHJlcXVpcmVzIHlvdSB0byBoYXZlIHVzZXIgZW50aXRpZXMgcG9wdWxhdGVkIGluIHRoZSBjYXRhbG9nLFxuICAgICAgLy8gZm9yIGV4YW1wbGUgdXNpbmcgaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9pbnRlZ3JhdGlvbnMvZ2l0aHViL29yZ1xuICAgICAgLy9cbiAgICAgIC8vIFRoZXJlIGFyZSBvdGhlciByZXNvbHZlcnMgdG8gY2hvb3NlIGZyb20sIGFuZCB5b3UgY2FuIGFsc28gY3JlYXRlXG4gICAgICAvLyB5b3VyIG93biwgc2VlIHRoZSBhdXRoIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgZGV0YWlsczpcbiAgICAgIC8vXG4gICAgICAvLyAgIGh0dHBzOi8vYmFja3N0YWdlLmlvL2RvY3MvYXV0aC9pZGVudGl0eS1yZXNvbHZlclxuICAgICAgZ2l0aHViOiBwcm92aWRlcnMuZ2l0aHViLmNyZWF0ZSh7XG4gICAgICAgIHNpZ25Jbjoge1xuICAgICAgICAgIC8qcmVzb2x2ZXIoXywgY3R4KSB7ICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9ICd1c2VyOmRlZmF1bHQvZ3Vlc3QnOyAvLyBNdXN0IGJlIGEgZnVsbCBlbnRpdHkgcmVmZXJlbmNlXG4gICAgICAgICAgICByZXR1cm4gY3R4Lmlzc3VlVG9rZW4oe1xuICAgICAgICAgICAgICBjbGFpbXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6IHVzZXJSZWYsIC8vIFRoZSB1c2VyJ3Mgb3duIGlkZW50aXR5XG4gICAgICAgICAgICAgICAgZW50OiBbdXNlclJlZl0sIC8vIEEgbGlzdCBvZiBpZGVudGl0aWVzIHRoYXQgdGhlIHVzZXIgY2xhaW1zIG93bmVyc2hpcCB0aHJvdWdoXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCovXG4gICAgICAgICAgIHJlc29sdmVyOiBwcm92aWRlcnMuZ2l0aHViLnJlc29sdmVycy51c2VybmFtZU1hdGNoaW5nVXNlckVudGl0eU5hbWUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-catalog-backend-module-github */ \"@backstage/plugin-catalog-backend-module-github\");\n/* harmony import */ var _backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n\n  builder.addEntityProvider(\n    _backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_2__.GitHubOrgEntityProvider.fromConfig(env.config, {\n      id: 'production',\n      orgUrl: 'https://github.com/PrasoonORG',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );   \n\n  builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.ScaffolderEntitiesProcessor());\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9yb290L3R5LWJhY2t1cC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2NhdGFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0YWxvZ0J1aWxkZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1jYXRhbG9nLWJhY2tlbmQnO1xuaW1wb3J0IHsgU2NhZmZvbGRlckVudGl0aWVzUHJvY2Vzc29yIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2NhZmZvbGRlci1iYWNrZW5kJztcblxuXG5cbmltcG9ydCB7IEdpdEh1Yk9yZ0VudGl0eVByb3ZpZGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kLW1vZHVsZS1naXRodWInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudixcbikge1xuICBjb25zdCBidWlsZGVyID0gYXdhaXQgQ2F0YWxvZ0J1aWxkZXIuY3JlYXRlKGVudik7XG5cbiAgYnVpbGRlci5hZGRFbnRpdHlQcm92aWRlcihcbiAgICBHaXRIdWJPcmdFbnRpdHlQcm92aWRlci5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICAgIGlkOiAncHJvZHVjdGlvbicsXG4gICAgICBvcmdVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vUHJhc29vbk9SRycsXG4gICAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgICBzY2hlZHVsZTogZW52LnNjaGVkdWxlci5jcmVhdGVTY2hlZHVsZWRUYXNrUnVubmVyKHtcbiAgICAgICAgZnJlcXVlbmN5OiB7IG1pbnV0ZXM6IDYwIH0sXG4gICAgICAgIHRpbWVvdXQ6IHsgbWludXRlczogMTUgfSxcbiAgICAgIH0pLFxuICAgIH0pLFxuICApOyAgIFxuXG4gIGJ1aWxkZXIuYWRkUHJvY2Vzc29yKG5ldyBTY2FmZm9sZGVyRW50aXRpZXNQcm9jZXNzb3IoKSk7XG4gIGNvbnN0IHsgcHJvY2Vzc2luZ0VuZ2luZSwgcm91dGVyIH0gPSBhd2FpdCBidWlsZGVyLmJ1aWxkKCk7XG4gIGF3YWl0IHByb2Nlc3NpbmdFbmdpbmUuc3RhcnQoKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n    logger: env.logger,\n    config: env.config,\n    discovery: env.discovery,\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vcm9vdC90eS1iYWNrdXAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9wcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1wcm94eS1iYWNrZW5kJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52LFxuKSB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n    discoveryApi: env.discovery,\n  });\n\n  return await (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    reader: env.reader,\n    catalogClient,\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vcm9vdC90eS1iYWNrdXAvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGFsb2dDbGllbnQgfSBmcm9tICdAYmFja3N0YWdlL2NhdGFsb2ctY2xpZW50JztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNjYWZmb2xkZXItYmFja2VuZCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudixcbikge1xuICBjb25zdCBjYXRhbG9nQ2xpZW50ID0gbmV3IENhdGFsb2dDbGllbnQoe1xuICAgIGRpc2NvdmVyeUFwaTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgICBjYXRhbG9nQ2xpZW50LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  // Initialize a connection to a search engine.\n  const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n    logger: env.logger,\n  });\n  const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n    logger: env.logger,\n    searchEngine,\n  });\n\n  const schedule = env.scheduler.createScheduledTaskRunner({\n    frequency: { minutes: 10 },\n    timeout: { minutes: 15 },\n    // A 3 second delay gives the backend server a chance to initialize before\n    // any collators are executed, which may attempt requests against the API.\n    initialDelay: { seconds: 3 },\n  });\n\n  // Collators are responsible for gathering documents known to plugins. This\n  // collator gathers entities from the software catalog.\n  indexBuilder.addCollator({\n    schedule,\n    factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n      discovery: env.discovery,\n      tokenManager: env.tokenManager,\n    }),\n  });\n\n  // collator gathers entities from techdocs.\n  indexBuilder.addCollator({\n    schedule,\n    factory: _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__.DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n      discovery: env.discovery,\n      logger: env.logger,\n      tokenManager: env.tokenManager,\n    }),\n  });\n\n  // The scheduler controls when documents are gathered from collators and sent\n  // to the search engine for indexing.\n  const { scheduler } = await indexBuilder.build();\n  scheduler.start();\n\n  (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, () => scheduler.stop());\n\n  return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n    engine: indexBuilder.getSearchEngine(),\n    types: indexBuilder.getDocumentTypes(),\n    permissions: env.permissions,\n    config: env.config,\n    logger: env.logger,\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9yb290L3R5LWJhY2t1cC9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3NlYXJjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VIb3RDbGVhbnVwIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zZWFyY2gtYmFja2VuZCc7XG5pbXBvcnQge1xuICBJbmRleEJ1aWxkZXIsXG4gIEx1bnJTZWFyY2hFbmdpbmUsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNlYXJjaC1iYWNrZW5kLW5vZGUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0Q2F0YWxvZ0NvbGxhdG9yRmFjdG9yeSB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZCc7XG5pbXBvcnQgeyBEZWZhdWx0VGVjaERvY3NDb2xsYXRvckZhY3RvcnkgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi10ZWNoZG9jcy1iYWNrZW5kJztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudixcbikge1xuICAvLyBJbml0aWFsaXplIGEgY29ubmVjdGlvbiB0byBhIHNlYXJjaCBlbmdpbmUuXG4gIGNvbnN0IHNlYXJjaEVuZ2luZSA9IG5ldyBMdW5yU2VhcmNoRW5naW5lKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gIH0pO1xuICBjb25zdCBpbmRleEJ1aWxkZXIgPSBuZXcgSW5kZXhCdWlsZGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgc2VhcmNoRW5naW5lLFxuICB9KTtcblxuICBjb25zdCBzY2hlZHVsZSA9IGVudi5zY2hlZHVsZXIuY3JlYXRlU2NoZWR1bGVkVGFza1J1bm5lcih7XG4gICAgZnJlcXVlbmN5OiB7IG1pbnV0ZXM6IDEwIH0sXG4gICAgdGltZW91dDogeyBtaW51dGVzOiAxNSB9LFxuICAgIC8vIEEgMyBzZWNvbmQgZGVsYXkgZ2l2ZXMgdGhlIGJhY2tlbmQgc2VydmVyIGEgY2hhbmNlIHRvIGluaXRpYWxpemUgYmVmb3JlXG4gICAgLy8gYW55IGNvbGxhdG9ycyBhcmUgZXhlY3V0ZWQsIHdoaWNoIG1heSBhdHRlbXB0IHJlcXVlc3RzIGFnYWluc3QgdGhlIEFQSS5cbiAgICBpbml0aWFsRGVsYXk6IHsgc2Vjb25kczogMyB9LFxuICB9KTtcblxuICAvLyBDb2xsYXRvcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBnYXRoZXJpbmcgZG9jdW1lbnRzIGtub3duIHRvIHBsdWdpbnMuIFRoaXNcbiAgLy8gY29sbGF0b3IgZ2F0aGVycyBlbnRpdGllcyBmcm9tIHRoZSBzb2Z0d2FyZSBjYXRhbG9nLlxuICBpbmRleEJ1aWxkZXIuYWRkQ29sbGF0b3Ioe1xuICAgIHNjaGVkdWxlLFxuICAgIGZhY3Rvcnk6IERlZmF1bHRDYXRhbG9nQ29sbGF0b3JGYWN0b3J5LmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICAgICAgdG9rZW5NYW5hZ2VyOiBlbnYudG9rZW5NYW5hZ2VyLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBjb2xsYXRvciBnYXRoZXJzIGVudGl0aWVzIGZyb20gdGVjaGRvY3MuXG4gIGluZGV4QnVpbGRlci5hZGRDb2xsYXRvcih7XG4gICAgc2NoZWR1bGUsXG4gICAgZmFjdG9yeTogRGVmYXVsdFRlY2hEb2NzQ29sbGF0b3JGYWN0b3J5LmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICAgICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgICAgdG9rZW5NYW5hZ2VyOiBlbnYudG9rZW5NYW5hZ2VyLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBUaGUgc2NoZWR1bGVyIGNvbnRyb2xzIHdoZW4gZG9jdW1lbnRzIGFyZSBnYXRoZXJlZCBmcm9tIGNvbGxhdG9ycyBhbmQgc2VudFxuICAvLyB0byB0aGUgc2VhcmNoIGVuZ2luZSBmb3IgaW5kZXhpbmcuXG4gIGNvbnN0IHsgc2NoZWR1bGVyIH0gPSBhd2FpdCBpbmRleEJ1aWxkZXIuYnVpbGQoKTtcbiAgc2NoZWR1bGVyLnN0YXJ0KCk7XG5cbiAgdXNlSG90Q2xlYW51cChtb2R1bGUsICgpID0+IHNjaGVkdWxlci5zdG9wKCkpO1xuXG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGVuZ2luZTogaW5kZXhCdWlsZGVyLmdldFNlYXJjaEVuZ2luZSgpLFxuICAgIHR5cGVzOiBpbmRleEJ1aWxkZXIuZ2V0RG9jdW1lbnRUeXBlcygpLFxuICAgIHBlcm1pc3Npb25zOiBlbnYucGVybWlzc2lvbnMsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "./src/plugins/techdocs.ts":
/*!*********************************!*\
  !*** ./src/plugins/techdocs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dockerode */ \"dockerode\");\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dockerode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  // Preparers are responsible for fetching source files for documentation.\n  const preparers = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Preparers.fromConfig(env.config, {\n    logger: env.logger,\n    reader: env.reader,\n  });\n\n  // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n  const dockerClient = new (dockerode__WEBPACK_IMPORTED_MODULE_2___default())();\n  const containerRunner = new _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DockerContainerRunner({ dockerClient });\n\n  // Generators are used for generating documentation sites.\n  const generators = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Generators.fromConfig(env.config, {\n    logger: env.logger,\n    containerRunner,\n  });\n\n  // Publisher is used for\n  // 1. Publishing generated files to storage\n  // 2. Fetching files from storage and passing them to TechDocs frontend.\n  const publisher = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Publisher.fromConfig(env.config, {\n    logger: env.logger,\n    discovery: env.discovery,\n  });\n\n  // checks if the publisher is working and logs the result\n  await publisher.getReadiness();\n\n  return await (0,_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n    preparers,\n    generators,\n    publisher,\n    logger: env.logger,\n    config: env.config,\n    discovery: env.discovery,\n    cache: env.cache,\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL3Jvb3QvdHktYmFja3VwL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvdGVjaGRvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9ja2VyQ29udGFpbmVyUnVubmVyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQge1xuICBjcmVhdGVSb3V0ZXIsXG4gIEdlbmVyYXRvcnMsXG4gIFByZXBhcmVycyxcbiAgUHVibGlzaGVyLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi10ZWNoZG9jcy1iYWNrZW5kJztcbmltcG9ydCBEb2NrZXIgZnJvbSAnZG9ja2Vyb2RlJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52LFxuKSB7XG4gIC8vIFByZXBhcmVycyBhcmUgcmVzcG9uc2libGUgZm9yIGZldGNoaW5nIHNvdXJjZSBmaWxlcyBmb3IgZG9jdW1lbnRhdGlvbi5cbiAgY29uc3QgcHJlcGFyZXJzID0gYXdhaXQgUHJlcGFyZXJzLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICByZWFkZXI6IGVudi5yZWFkZXIsXG4gIH0pO1xuXG4gIC8vIERvY2tlciBjbGllbnQgKGNvbmRpdGlvbmFsbHkpIHVzZWQgYnkgdGhlIGdlbmVyYXRvcnMsIGJhc2VkIG9uIHRlY2hkb2NzLmdlbmVyYXRvcnMgY29uZmlnLlxuICBjb25zdCBkb2NrZXJDbGllbnQgPSBuZXcgRG9ja2VyKCk7XG4gIGNvbnN0IGNvbnRhaW5lclJ1bm5lciA9IG5ldyBEb2NrZXJDb250YWluZXJSdW5uZXIoeyBkb2NrZXJDbGllbnQgfSk7XG5cbiAgLy8gR2VuZXJhdG9ycyBhcmUgdXNlZCBmb3IgZ2VuZXJhdGluZyBkb2N1bWVudGF0aW9uIHNpdGVzLlxuICBjb25zdCBnZW5lcmF0b3JzID0gYXdhaXQgR2VuZXJhdG9ycy5mcm9tQ29uZmlnKGVudi5jb25maWcsIHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29udGFpbmVyUnVubmVyLFxuICB9KTtcblxuICAvLyBQdWJsaXNoZXIgaXMgdXNlZCBmb3JcbiAgLy8gMS4gUHVibGlzaGluZyBnZW5lcmF0ZWQgZmlsZXMgdG8gc3RvcmFnZVxuICAvLyAyLiBGZXRjaGluZyBmaWxlcyBmcm9tIHN0b3JhZ2UgYW5kIHBhc3NpbmcgdGhlbSB0byBUZWNoRG9jcyBmcm9udGVuZC5cbiAgY29uc3QgcHVibGlzaGVyID0gYXdhaXQgUHVibGlzaGVyLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gIH0pO1xuXG4gIC8vIGNoZWNrcyBpZiB0aGUgcHVibGlzaGVyIGlzIHdvcmtpbmcgYW5kIGxvZ3MgdGhlIHJlc3VsdFxuICBhd2FpdCBwdWJsaXNoZXIuZ2V0UmVhZGluZXNzKCk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgcHJlcGFyZXJzLFxuICAgIGdlbmVyYXRvcnMsXG4gICAgcHVibGlzaGVyLFxuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGlzY292ZXJ5OiBlbnYuZGlzY292ZXJ5LFxuICAgIGNhY2hlOiBlbnYuY2FjaGUsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/techdocs.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vcm9vdC90eS1iYWNrdXAvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9yb290L3R5LWJhY2t1cC9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuXG5mdW5jdGlvbiBkdW1teSgpIHt9XG5cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdGlmIChzaG91bGRMb2cobGV2ZWwpKSB7XG5cdFx0aWYgKGxldmVsID09PSBcImluZm9cIikge1xuXHRcdFx0Y29uc29sZS5sb2cobXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcIndhcm5pbmdcIikge1xuXHRcdFx0Y29uc29sZS53YXJuKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1zZyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cbnZhciBncm91cCA9IGNvbnNvbGUuZ3JvdXAgfHwgZHVtbXk7XG52YXIgZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkIHx8IGR1bW15O1xudmFyIGdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZCB8fCBkdW1teTtcbi8qIGVzbGludC1lbmFibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwID0gbG9nR3JvdXAoZ3JvdXApO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cENvbGxhcHNlZCA9IGxvZ0dyb3VwKGdyb3VwQ29sbGFwc2VkKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBFbmQgPSBsb2dHcm91cChncm91cEVuZCk7XG5cbm1vZHVsZS5leHBvcnRzLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9yb290L3R5LWJhY2t1cC9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvcG9sbC5qcz8xMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyBfX3Jlc291cmNlUXVlcnkgKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdHZhciBob3RQb2xsSW50ZXJ2YWwgPSArX19yZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpIHx8IDEwICogNjAgKiAxMDAwO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdHZhciBjaGVja0ZvclVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlKGZyb21VcGRhdGUpIHtcblx0XHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdG1vZHVsZS5ob3Rcblx0XHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRcdGlmIChmcm9tVXBkYXRlKSBsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlIGFwcGxpZWQuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdFx0Y2hlY2tGb3JVcGRhdGUodHJ1ZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuXCIpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFlvdSBuZWVkIHRvIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIVwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRzZXRJbnRlcnZhbChjaGVja0ZvclVwZGF0ZSwgaG90UG9sbEludGVydmFsKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common":
/*!*******************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!******************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!*******************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!***********************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend-module-github":
/*!*****************************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-catalog-backend-module-github/dist/index.cjs.js" ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-catalog-backend-module-github/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!***************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!***************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!*************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!******************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!*******************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!**************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-techdocs-backend":
/*!****************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js" ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js");

/***/ }),

/***/ "dockerode":
/*!***********************************************************************!*\
  !*** external "/root/ty-backup/node_modules/dockerode/lib/docker.js" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/dockerode/lib/docker.js");

/***/ }),

/***/ "express-promise-router":
/*!****************************************************************************************************!*\
  !*** external "/root/ty-backup/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/root/ty-backup/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("728ed79dfc8e8c712b3b")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;