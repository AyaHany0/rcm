// the products come from the api
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

// for the modal box
export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (results: Product[]) => void;
}

// for the form
export interface SearchFormValues {
  num: string;
  code: string;
}

// use it in search results component (props)
export interface SearchResultsProps {
  products: Product[];
}
