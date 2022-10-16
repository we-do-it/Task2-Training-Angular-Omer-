import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { StoreModule } from '@ngrx/store';
import { AlertComponent } from './components/alert/alert.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { pokemonTeamReducer } from './state/pokemon/pokemon.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ContentComponent,
    AlertComponent,
    RadarChartComponent,
    PokemonDetailsComponent,
    PokemonTableComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ pokemonTeam: pokemonTeamReducer }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
