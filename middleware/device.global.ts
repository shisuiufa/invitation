export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/qr") return;

  if (!detectPhone()) {
    return navigateTo("/qr", { replace: true });
  }
});
