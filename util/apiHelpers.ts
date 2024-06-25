import {ResultResponse} from "@/types";

export const handleTransformResponse = <T>(response: ResultResponse<T>) => {
    if (response.code === 200) {
        alert('Operation successful');
        return response.data;
    } else {
        alert(`Operation failed: ${response.message}`);
        throw new Error(response.message);
    }
}

export const handleTransformErrorResponse = (response: { status: string | number, data?: any }) => {
    if (response.status === 403) {
        alert(`${response.data?.message || 'You do not have permission to perform this action.'}`);
    } else if (response.status === 400) {
        alert(`Request error: ${response.status}`);
    } else if (response.status === 500) {
        alert('Server error, please try again later.');
    } else if (response.status === 401) {
        alert(`${response.data?.message || 'Access Denied: You are not logged in.'}`);
    } else {
        alert(`Unknown error: ${response.status}`);
    }
}

export const handleUnhandledError = (error: any) => {
    alert(`Unhandled error: ${error.message || error}`);
}
