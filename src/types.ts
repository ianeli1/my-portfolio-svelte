export module Types {
  export interface BasicElement {
    text: string;
    onClick?: () => void;
  }

  export interface Field {
    title: string;
    text: string;
  }

  export interface GitHubProject {
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    homepage: string;
    language: null | string;
    languages_url: string; //add a button to see all?
  }
}
