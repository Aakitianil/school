

import { Component, OnInit } from '@angular/core';
// import * as console from 'console';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { TeacherService } from 'src/app/demo/service/teacher.service';
import { Teacher } from '../Model/teacher';

@Component({
  selector: 'app-v-teacher',
  templateUrl: './v-teacher.component.html',
  styleUrls: ['./v-teacher.component.scss'],
  providers: [MessageService]
})
export class VTeacherComponent implements OnInit {

  productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    teachers: Teacher[] = [];

    teacher: Teacher = {};

    selectedProducts: Teacher[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private teacherService: TeacherService, private messageService: MessageService) { }

    ngOnInit() {
        this.teacherService.getTeacher().then((data:Teacher[]) =>{
            this.teachers = data;
        console.log("data",this.teachers)
        });
            
        

        this.cols = [
            { field: 'TeacherId', header: 'TeacherId' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.teacher = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.teacher = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.teacher = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.teachers = this.teachers.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.teachers = this.teachers.filter(val => val.id !== this.teacher.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.teacher = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.teacher.name?.trim()) {
            if (this.teacher.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.teachers[this.findIndexById(this.teacher.id)] = this.teacher;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.teacher.id = this.createId();
                this.teacher.teacherid = this.createId();
                this.teacher.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.teachers.push(this.teacher);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.teachers = [...this.teachers];
            this.productDialog = false;
            this.teacher= {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}


