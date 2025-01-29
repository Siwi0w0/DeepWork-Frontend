import { EventData } from '../types/event.types';

export const validateEventData = (data: EventData) => {
    const errors: Record<string, string> = {};

    if (!data.title.trim()){
        errors.title = 'Title is required';
    }

    if (data.end <= data.start) {
        errors.title = 'End time must be after start time';
    }

    return errors;
}