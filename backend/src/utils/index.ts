export const handleError = (error: any) => {
    console.error(error);
    return {
        success: false,
        message: error.message || 'An unexpected error occurred.',
    };
};

export const formatResponse = (data: any, message: string = 'Success') => {
    return {
        success: true,
        message,
        data,
    };
};