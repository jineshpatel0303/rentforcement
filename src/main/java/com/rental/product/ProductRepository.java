package com.rental.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

}
