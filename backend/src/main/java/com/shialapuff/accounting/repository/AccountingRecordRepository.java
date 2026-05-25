package com.shialapuff.accounting.repository;

import com.shialapuff.accounting.entity.AccountingRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountingRecordRepository extends JpaRepository<AccountingRecord, Long> {
}
