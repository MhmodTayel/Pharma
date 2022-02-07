import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }
  public openSnackBar(message: string, action: string, snackType?:any) {
    const _snackType: any = snackType !== undefined ? snackType : 'Success';
    
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: { message: message, snackType: _snackType }
    });
  }
}
