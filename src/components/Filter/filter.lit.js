import { LitElement, html, css } from 'lit'

class FilterElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid var(--border-color);
      background-color: var(--surface-color);
    }

    .filter-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-top: 130px;
      margin-left: 190px;
      margin-bottom: 45px;
    }

    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text);
      margin-bottom: 20px;
      text-align: left;
    }

    .filters {
      display: flex;
      gap: 30px;
    }

    .filter-button {
      padding: 10px 20px;
      background-color: white;
      color: black;
      border: 1px solid var(--border-color);
      border-radius: 5px;
      cursor: pointer;
    }

    .filter-button.primary {
      background-color: var(--primary-color);
      color: white;
    }
/*     .filter-button-secondary{
      background-color: var
    } */
  `

  render() {
    return html`
      <div class="filter-container">
        <div class="title">Eventos perto de você</div>
        <div class="filters">
          <select class="filter-button">
           <option value="qualquer-dia">Qualquer dia</option>
           </select>
           <select class="filter-button">
            <option value="qualquer-tipo">Qualquer tipo</option>
             </select>
          <select class="filter-button primary">
            <option value="Classificaçao" class="filter-button.primary">Classificar por: Distância</option>
             </select>
        </div>
      </div>
    `
  }
}

/* customElements.define('filter-element', FilterElement); */
export default FilterElement
