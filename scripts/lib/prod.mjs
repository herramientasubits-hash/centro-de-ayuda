/**
 * Ayudas para navegar producción con la sesión guardada.
 *
 * Una sesión nueva arranca en «Todas las sucursales» y la app pide elegir una
 * («Por favor seleccione una sucursal para poder continuar»). Las capturas se
 * toman siempre en la misma sucursal, la de `HELP_BRANCH` (por defecto la
 * cuenta de prueba principal), para que los datos sean coherentes.
 */
export const BRANCH = process.env.HELP_BRANCH ?? "mugen barber 2";

export async function chooseBranch(page, branch = BRANCH) {
  const chooser = page.getByText("Por favor seleccione una sucursal");
  if (!(await chooser.isVisible().catch(() => false))) return false;
  // El mismo nombre está en la cabecera y en tablas (columna Sucursal): solo cuenta el del modal.
  await page.locator(".centralmodal-overlay").getByText(branch, { exact: true }).first().click();
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(1200);
  return true;
}
