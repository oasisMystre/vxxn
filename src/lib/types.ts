export interface VideoItem {
    id: string;
    url: string;
    source: 'youtube' | 'twitch' | 'other';
    thumbnail?: string;
    title: string;
    duration: string;
    quality: string;
    views: number;
    uploader: string;
    uploadStatus: 'pending' | 'uploading' | 'uploaded';
    uploadProgress?: number;
}
