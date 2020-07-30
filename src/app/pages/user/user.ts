<div class="container">
  <h3 mat-dialog-title>Add new Issue</h3>

  <form class="mat-dialog-content" (ngSubmit)="submit" #formControl="ngForm">

    <div class="form">
      <mat-form-field color="accent">
        <input matInput #input class="form-control" placeholder="Id" [(ngModel)]="data.id" name="id" required >
        <mat-error *ngIf="formControl.invalid">{{getErrorMessage()}}</mat-error>
      </mat-form-field>
    </div>

    <!--Textarea for demo purposes-->
    <div class="form">
      <mat-form-field color="accent">
        <textarea matInput #input class="form-control" placeholder="firstName" [(ngModel)]="data.firstName" name="firstName" required ></textarea>
        <mat-error *ngIf="formControl.invalid">{{getErrorMessage()}}</mat-error>
      </mat-form-field>
    </div>

    <!--Contains mat-hint for characters count and has maxLengt set-->
    <div class="form">
      <mat-form-field color="accent">
        <input matInput #inputstate class="form-control" placeholder="lastName" [(ngModel)]="data.state" name="state" maxlength="10" required >
        <mat-error *ngIf="formControl.invalid">{{getErrorMessage()}}</mat-error>
        <mat-hint align="end">{{inputstate.value?.length || 0}}/10</mat-hint>
      </mat-form-field>
    </div>

    <div class="form">
      <mat-form-field color="accent">
        <input matInput placeholder="lastName" [(ngModel)]="data.lastName" name="lastName">
      </mat-form-field>
    </div>

    <div class="form">
      <mat-form-field color="accent">
        <input matInput placeholder="displayName" [(ngModel)]="data.displayName" name="displayName">
      </mat-form-field>
    </div>

    <div class="form">
      <mat-form-field color="accent">
        <input matInput placeholder="emailId" [(ngModel)]="data.emailId" name="emailId">
      </mat-form-field>
    </div>

    <div mat-dialog-actions>
      <button mat-button [type]="submit" [disabled]="!formControl.valid" [mat-dialog-close]="1" (click)="confirmAdd()">Save</button>
      <button mat-button (click)="onNoClick()" tabindex="-1">Cancel</button>
    </div>
  </form>
</div>
