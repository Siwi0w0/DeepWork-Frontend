export interface EventData {
    title: string;
    start: Date;
    end: Date;
    description?: string;
    label: string;
  }

  export interface EventFormProps {
    initialDateTime?: Date;
    onSubmit: (event: EventData) => void;
    onClose: () => void;
  }