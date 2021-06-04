import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataRetrieverService } from '../data-retriever.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  columnsToDisplay = ['title', 'body', 'view'];
  dataSource = new MatTableDataSource<any>();

  constructor(private data: DataRetrieverService) { }

  ngOnInit(): void {
    this.data.getPosts().subscribe(
      (data: any[]) => {
        this.dataSource.data = data;
      }
    )
  }

}
