export interface PhotoGateway {
  getAll(albumId: string): Promise<any>
  getById(id: string): Promise<any>
}
