export interface IPlan {
  id?: string;
  color: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
  stackable: boolean;
  tiltable: boolean;
}
