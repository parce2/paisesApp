import { PorCapitalComponent } from './dashboard/pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './dashboard/pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './dashboard/pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './dashboard/pais/pages/ver-pais/ver-pais.component';



export const paisRouting = [
  { path: 'pais', component: PorPaisComponent, data: { title: 'Inicio Paises' } },
  { path: 'region', component: PorRegionComponent, data: { title: 'Region' } },
  { path: 'capital', component: PorCapitalComponent, data: { title: 'Capital' } },
  { path: 'pais/:id', component: VerPaisComponent, data: { title: 'Ver-Pais' } }
]