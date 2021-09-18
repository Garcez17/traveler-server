interface IFiles {
  path: string;
}

export default interface IStorageProvider {
  saveFile(files: IFiles[]): Promise<IFiles[]>;
  deleteFile(files: string[]): Promise<void>;
}
